<script setup></script>
<script>
import customButton from "@/components/customButton.vue";
export default {
  data() {
    return {
      taskName: "",
      taskDescription: "",
      storedTaskToChangeId: "",
      isTaskChanging: false,
      taskList: [],
    };
  },
  mounted() {
    if (localStorage.getItem("tasks") != null) {
      console.log("Loaded saved tasks");
      this.taskList = JSON.parse(localStorage.getItem("tasks"));
    } else {
      console.log("No saved tasks");
    }
  },
  methods: {
    CreateNewTask() {
      if (this.taskDescription.length === 0) {
        this.taskDescription = "No Description";
      }
      this.taskList.push({
        id: this.taskList.length + 1,
        nameOfTheTask: this.taskName,
        descriptionOfTheTask: this.taskDescription,
        isDone: false,
      });
      this.ClearFields();
      this.SaveTasks();
    },
    DeleteTask(idToDelete) {
      this.taskList = this.taskList.filter(
        (task) => task != this.taskList[idToDelete]
      );
      this.SaveTasks();
    },
    TaskToField(idToChange) {
      this.taskName = this.taskList[idToChange].nameOfTheTask;
      this.taskDescription = this.taskList[idToChange].descriptionOfTheTask;
      this.isTaskChanging = true;
      this.storedTaskToChangeId = idToChange;
    },
    ChangeTask() {
      this.taskList[this.storedTaskToChangeId].nameOfTheTask = this.taskName;
      if (this.taskDescription.length === 0) {
        this.taskList[this.storedTaskToChangeId].descriptionOfTheTask =
          "No Description";
      } else {
        this.taskList[this.storedTaskToChangeId].descriptionOfTheTask =
          this.taskDescription;
      }
      this.isTaskChanging = false;
      this.ClearFields();
      this.SaveTasks();
    },
    CancelChange() {
      this.isTaskChanging = false;
      this.ClearFields();
    },
    ClearFields() {
      this.taskName = "";
      this.taskDescription = "";
    },
    SaveTasks() {
      localStorage.setItem("tasks", JSON.stringify(this.taskList));
      //   I wanted to save the array with tasks OnUpdate,
      //   but as I understood it will slow down the page, so I decided to make a method
    },
    AskClient() {
      if (confirm("Are you sure you want to delete ALL of the tasks?")) {
        console.log("All task deleted");
        this.ClearAllTasks();
      } else {
        console.log("Delete canseled");
      }
    },
    ClearAllTasks() {
      this.taskList = [];
      localStorage.removeItem("tasks");
    },
  },
};
</script>

<template>
  <div class="m-10 flex flex-col gap-y-10">
    <div class="overflow-hidden rounded-2xl border-2 border-gray-300">
      <div
        class="flex flex-col mdp:flex-row border-2 bg-gray-200 p-4 items-center mdp:items-center justify-around gap-y-4 mdp:gap-x-4 transition-all"
      >
        <div
          class="flex flex-col gap-y-2 w-full sm:w-[50vw] mx-4 mdp:mx-0 mdp:w-[20vw]"
        >
          <p class="text-center">Name of task</p>
          <input
            type="text"
            placeholder="Input name of your task"
            v-model="taskName"
            maxlength="35"
          />
          <p
            :class="
              taskName.length === 0 ? 'text-xs visible' : 'text-[0px] invisible'
            "
            class="text-red-400 text-center transition-all"
          >
            Please input name of the task to create\change task
          </p>
        </div>
        <div
          class="flex flex-col gap-y-2 w-full sm:w-[70vw] mx-4 mdp:mx-0 mdp:w-[40vw]"
        >
          <p class="text-center">Description of task</p>
          <textarea
            cols="60"
            rows="2"
            v-model="taskDescription"
            placeholder="Input description of your task"
            maxlength="200"
          ></textarea>
        </div>
        <div class="flex flex-col gap-y-2">
          <customButton
            @click="CreateNewTask"
            v-if="!isTaskChanging"
            v-bind:disabled="taskName.length === 0"
            text="Create new task"
            color="blue-500"
            textColor="white"
            textColorOnHover="blue-700"
          ></customButton>
          <customButton
            @click="ChangeTask"
            v-if="isTaskChanging"
            v-bind:disabled="taskName.length === 0"
            text="Change task"
            color="blue-500"
            textColor="white"
            textColorOnHover="blue-700"
          ></customButton>
          <customButton
            @click="CancelChange"
            v-if="isTaskChanging"
            text="Cancel task change"
            color="red-400"
            textColor="white"
            textColorOnHover="red-700"
          ></customButton>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col justify-center items-around w-full bg-blue-400 text-white border-2 border-blue-500 p-2 overflow-hidden rounded-2xl gap-y-2"
    >
      <h1 class="text-4xl text-center">Tasks:</h1>
      <customButton
        @click="AskClient"
        v-bind:disabled="taskList.length === 0"
        text="Delete all tasks"
        color="red-400"
        textColor="white"
        textColorOnHover="white"
        class="order-last mdp:order-none sm:flex mdp:place-self-end"
      ></customButton>
      <div class="flex flex-col gap-y-2 text-black">
        <div
          v-for="(task, index) in taskList"
          class="grid grid-cols-1 md:grid-cols-4 p-4 items-center justify-around gap-y-6 md:gap-x-4 transition-all duration-500 overflow-hidden rounded-2xl"
          :class="taskList[index].isDone ? ' bg-green-200 ' : 'bg-gray-200 '"
        >
          <div class="flex flex-col gap-y-2 text-center">
            <p class="text-sm text-gray-500">Task name</p>
            <p>{{ task.nameOfTheTask }}</p>
          </div>
          <div class="flex flex-col gap-y-2 text-center">
            <p class="text-sm text-gray-500">Task description</p>
            <p class="overflow-hidden">{{ task.descriptionOfTheTask }}</p>
          </div>
          <div class="flex flex-col gap-y-2">
            <p class="text-center text-sm text-gray-500">Is task done?</p>
            <input type="checkbox" v-model="task.isDone" @change="SaveTasks" />
          </div>
          <div class="flex flex-col items-center gap-y-2">
            <customButton
              @click="TaskToField(index)"
              text="Change"
              color="blue-500"
              textColor="white"
              textColorOnHover="blue-700"
            ></customButton>
            <customButton
              @click="DeleteTask(index)"
              text="Delete"
              color="red-400"
              textColor="white"
              textColorOnHover="red-700"
            ></customButton>
          </div>
        </div>
        <p
          :class="taskList.length === 0 ? 'text-xl' : 'text-[0px]'"
          class="text-center text-white transition-all"
        >
          No active tasks now
        </p>
      </div>
    </div>
  </div>
</template>
<style>
/* button {
  border-width: 2px;
  border-color: rgb(251 146 60);
} */
input,
textarea {
  border-radius: 1rem;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
}
</style>
