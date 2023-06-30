<template>
  <a-layout style="height: 100%">
    <a-layout-sider collapsible class="sider" style="background-color: white">
      <div :style="{display: 'flex',minHeight: '60px',margin: '0 10px 0 10px'}">
        <a-row :style="{lineHeight: '60px'}">
          <a-space size="middle">
            <a-switch
                :checked="theme === 'dark'"
                checked-children="Dark"
                un-checked-children="Light"
                @change="changeTheme"/>
          </a-space>
          <a-col :span="4">
          </a-col>
          <a-col>
          </a-col>
        </a-row>
      </div>
      <a-menu
          v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys"
          mode="inline"
          :theme="theme">
        <a-menu-item key="basicDataDisplay">
          <router-link to="basicDataDisplay">
            <span>基础数据展示页</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <template #icon>
            <CalendarOutlined/>
          </template>
          Navigation Two
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #icon>
            <AppstoreOutlined/>
          </template>
          <template #title>Navigation Three</template>
          <a-menu-item key="3">Option 3</a-menu-item>
          <a-menu-item key="4">Option 4</a-menu-item>
          <a-sub-menu key="sub1-2" title="Submenu">
            <a-menu-item key="5">Option 5</a-menu-item>
            <a-menu-item key="6">Option 6</a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #icon>
            <SettingOutlined/>
          </template>
          <template #title>Navigation Four</template>
          <a-menu-item key="7">Option 7</a-menu-item>
          <a-menu-item key="8">Option 8</a-menu-item>
          <a-menu-item key="9">Option 9</a-menu-item>
          <a-menu-item key="10">Option 10</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header">
        <div :style="{display: 'flex',lineHeight:'64px',minWidth:'700px',overflow: 'hidden'}">
          <div :style="{width: '80%'}">
            <a-breadcrumb :style="{lineHeight:'64px'}">
              <a-breadcrumb-item href="">
                <home-outlined/>
              </a-breadcrumb-item>
              <a-breadcrumb-item href="">
                <user-outlined/>
                <span>Application List</span>
              </a-breadcrumb-item>
              <a-breadcrumb-item>Application</a-breadcrumb-item>
            </a-breadcrumb>
          </div>
          <div :style="{display:'flex',width: '20%',justifyContent: 'flex-end'}">
            <a-dropdown>
              <a class="ant-dropdown-link" @click.prevent>
                <a-space size="small">
                  <a-avatar :src="user.avatarUrl" size="large">
                    <template>
                      <UserOutlined/>
                    </template>
                  </a-avatar>
                  <span v-text="user.username"/>
                  <DownOutlined/>
                </a-space>
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item>
                    <a href="javascript:">1st menu item</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:">2nd menu item</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:">3rd menu item</a>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </div>
      </a-layout-header>
      <a-layout-content class="content">
        <div :style="{ padding: '24px', background: '#fff',height: '100%'}">
          <router-view/>
        </div>
      </a-layout-content>
      <a-layout-footer class="footer">
        Created by Cra2iTeT
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import {defineComponent, reactive, toRefs} from 'vue';
import {DownOutlined, UserOutlined} from "@ant-design/icons-vue";
import {useRouter} from 'vue-router'

const router = useRouter()

// TODO 主题切换
export default defineComponent({
  name: 'indexPage',
  components: {
    DownOutlined,
    UserOutlined,
  },
  setup() {
    const state = reactive({
      collapsed: false,
      theme: 'dark',
      selectedKeys: ['basicDataDisplay'],
      openKeys: ['basicDataDisplay'],
      preOpenKeys: ['basicDataDisplay'],
    });
    const user = {
      username: "Cra2iTeT",
      avatarUrl: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    };
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    };
    const changeTheme = checked => {
      state.theme = checked ? 'dark' : 'light';
    };
    return {
      ...toRefs(state),
      changeTheme,
      toggleCollapsed,
      user,
      router,
    };
  },
})
</script>
<style>

.sider {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
}

.header {
  background-color: #fff !important;
  padding: 0 16px 0 16px !important;
}

.content {
  margin: 16px 16px 0 !important;
}

.footer {
  text-align: center !important;
  padding: 24px 50px 0 50px !important;
}

</style>
