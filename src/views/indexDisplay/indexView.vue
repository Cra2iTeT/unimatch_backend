<template>
  <a-layout style="min-height: 100vh" id="indexView">
    <a-layout-sider v-model:collapsed="collapsed" collapsible :trigger="null">
      <div class="logo"/>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="userActivityDisplay">
          <user-outlined/>
          <span>用户活性数据</span>
          <router-link to="userActivityDisplay"/>
        </a-menu-item>

        <a-sub-menu key="dataManager">
          <template #icon>
            <user-outlined/>
          </template>
          <template #title>
            <span>
              数据管理
            </span>
          </template>
          <a-menu-item key="userManager">
            <user-outlined/>
            <span>用户管理</span>
            <router-link to="/dataManager/userManager"/>
          </a-menu-item>
          <a-menu-item key="teamManager">
            <user-outlined/>
            <span>群管理</span>
            <router-link to="/dataManager/teamManager"/>
          </a-menu-item>
          <a-menu-item key="tagManager">
            <user-outlined/>
            <span>标签管理</span>
            <router-link to="/dataManager/tagManager"/>
          </a-menu-item>
          <a-menu-item key="tagRelationManager">
            <user-outlined/>
            <span>标签关联度管理</span>
            <router-link to="/dataManager/tagRelationManager"/>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="2">
          <video-camera-outlined/>
          <span>Option 2</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined/>
              <span>User</span>
            </span>
          </template>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <upload-outlined/>
              <span>Team</span>
            </span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <upload-outlined/>
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)"/>
      </a-layout-header>
      <a-layout-content style="margin: 16px">
        <div :style="{ height: '100%', padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view/>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import "./indexView.css"
import {defineComponent, ref} from 'vue';
import {useRouter} from 'vue-router'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons-vue';

const router = useRouter()

// TODO 主题切换,网络访问情况，资源占用情况
export default defineComponent({
  name: 'indexView',
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup() {
    return {
      selectedKeys: ref(['1']),
      collapsed: ref(false),
      router,
    };
  },
})
</script>
<style>

</style>
