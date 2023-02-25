<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer"/>

        <q-toolbar-title>
          {{ $t('message.TERMINATOR_LINE') }}
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer"/>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- left -->
      <q-list class="rounded-borders text-primary">
        <q-item
            to="/"
            clickable
            v-ripple
            :active="link === 'home'"
            @click="link = 'home'"
            active-class="active-link">

          <q-item-section avatar>
            <q-icon name="home"/>
          </q-item-section>

          <q-item-section>{{ $t('message.HOME') }}</q-item-section>
        </q-item>

        <q-item
            to="/article"
            clickable
            v-ripple
            :active="link === 'article'"
            @click="link = 'article'"
            active-class="active-link">
          <q-item-section avatar>
            <q-icon name="inventory"/>
          </q-item-section>

          <q-item-section>{{ $t('message.ARTICLE_MANAGEMENT') }}</q-item-section>
        </q-item>
      </q-list>

    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script setup>
import {ref} from 'vue'

const link = ref('home')

const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
</script>

<style scoped lang="sass">
.active-link
  color: white
  background: $secondary
</style>