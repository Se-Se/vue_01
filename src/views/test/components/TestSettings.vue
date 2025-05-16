<template>
  <div class="settings-content">
    <a-tabs v-model="activeTab">
      <a-tab-pane key="1" tab="General Settings">
        <a-form layout="vertical">
          <a-form-item label="Language">
            <a-select v-model="settings.language">
              <a-select-option value="en">English</a-select-option>
              <a-select-option value="zh">中文</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="Theme">
            <a-radio-group v-model="settings.theme">
              <a-radio value="light">Light</a-radio>
              <a-radio value="dark">Dark</a-radio>
            </a-radio-group>
          </a-form-item>
          <a-form-item>
            <a-button type="primary">Save Changes</a-button>
          </a-form-item>
        </a-form>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Notification Settings">
        <a-list>
          <a-list-item>
            <a-switch v-model="settings.emailNotifications" />
            <span style="margin-left: 10px">Email Notifications</span>
          </a-list-item>
          <a-list-item>
            <a-switch v-model="settings.pushNotifications" />
            <span style="margin-left: 10px">Push Notifications</span>
          </a-list-item>
        </a-list>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup>
import { defineOptions, ref, reactive } from 'vue'

defineOptions({
  name: 'TestSettingsComponent'
})

const activeTab = ref('1')
const settings = reactive({
  language: 'en',
  theme: 'light',
  emailNotifications: true,
  pushNotifications: false
})
</script>

<style scoped>
.settings-content {
  max-width: 800px;
  margin: 0 auto;
}

.ant-list-item {
  padding: 12px 0;
}
</style> 