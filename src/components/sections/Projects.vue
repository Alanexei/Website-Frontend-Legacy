<template>
  
<section id="projects">
  <span class="section-divider">
    My Projects
  </span>
  <Logo v-if="loading" class="section-loader" />
  <span v-if="failed" class="no-projects">Something went wrong...</span>
  <div class="project-container">
    <Project v-for="project in this.projects" :key="project.id" :data="project"/>
  </div>
</section>

</template>

<script>

import axios from "axios";

import Logo from '../elements/Logo';

import Project from '../Project'

export default {
  name: 'Projects',
  components: {
    Logo,
    Project
  },
  data() {
    return {
      isLoading: false,
      projects: []
    }
  },
  computed: {
    loading() {
      return this.isLoading
    },
    failed() {
      return !this.isLoading && this.projects.length === 0
    }
  },
  created() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
      this.isLoading = true;
      try {
        const projects = await axios.get('/api/projects');
        this.projects = projects.data
      } catch (err) {
        console.error(err);
        setTimeout(() => {
          this.getProjects();
        }, 15000)
      } finally {
        this.isLoading = false;
      }
    }
  }
}

</script>