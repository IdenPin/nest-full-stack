<template>
  <div class="pa-3">
    <h3>热门课程</h3>
    <v-row>
      <v-col v-for="(item, index) in courses" :key="index" md="4">
        <v-card class="mx-auto" max-width="344">
          <v-img
            :src="
              item.cover ||
                'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
            "
            height="200px"
          ></v-img>

          <v-card-title>
            {{ item.name }}
          </v-card-title>

          <v-card-subtitle>
            {{ item.updatedAt }}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn text>Share</v-btn>

            <v-btn color="purple" text>
              Explore
            </v-btn>

            <v-spacer></v-spacer>
          </v-card-actions>

          <!-- <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                {{ courses }}
              </v-card-text>
            </div>
          </v-expand-transition> -->
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    const courses = await $axios.$get('courses')
    return {
      courses: courses.data
    }
  }
}
</script>
