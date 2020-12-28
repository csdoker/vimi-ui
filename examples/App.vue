<template>
  <div id="app">
    <div class="container">
      <h2>Button 按钮</h2>
      <div class="item">
        <v-button type="primary">Primary</v-button>
        <v-button>Default</v-button>
        <v-button type="dashed">Dashed</v-button>
        <v-button type="danger">Danger</v-button>
        <v-button :disabled="true">Disabled</v-button>
        <v-button :loading="true">Default</v-button>
      </div>
      <div class="item">
        <v-button-group>
          <v-button>上一页</v-button>
          <v-button>更多</v-button>
          <v-button>下一页</v-button>
        </v-button-group>
      </div>
    </div>
    <div class="container">
      <h2>Switch 开关</h2>
      <div class="item">
        <v-switch v-model="switchValue1" active-value="active" inactive-value="inactiveValue" @change="handleSwitch1" style="margin-right: 20px;"></v-switch>
        <v-switch v-model="switchValue2" active-color="#67C23A" inactive-color="#F56C6C" style="margin-right: 20px;"></v-switch>
        <v-switch v-model="switchValue3" disabled style="margin-right: 20px;"></v-switch>
        <v-switch v-model="switchValue4" disabled></v-switch>
      </div>
    </div>
    <div class="container">
      <h2>Checkbox 多选框</h2>
      <div class="item">
        <v-checkbox v-model="checkboxValue1"></v-checkbox>
        <v-checkbox v-model="checkboxValue2" @change="handleCheckbox">备选项1</v-checkbox>
        <v-checkbox v-model="checkboxValue3" :disabled="true">备选项2</v-checkbox>
        <v-checkbox v-model="checkboxValue4" :disabled="true">备选项3</v-checkbox>
      </div>
    </div>
    <div class="container">
      <h2>Input 输入框</h2>
      <div class="item">
        <v-input v-model="inputValue" style="width: 200px; margin-right: 20px;"></v-input>
        <v-input disabled style="width: 200px; margin-right: 20px;"></v-input>
        <v-input maxlength="5" placeholder="最大输入长度为5个字符" style="width: 200px"></v-input>
      </div>
    </div>
    <div class="container">
      <h2>Tabs 选项卡</h2>
      <div class="item">
        <v-button @click="handleSelectTabs('panel1')">选项卡1</v-button>
        <v-button @click="handleSelectTabs('panel2')">选项卡2</v-button>
        <v-button @click="handleSelectTabs('panel3')">选项卡3</v-button>
        <v-button @click="handleSelectTabs('panel4')">选项卡4</v-button>
      </div>
      <v-tabs v-model="tabValue" :animate="true" @tab-click="handleTabClick">
        <v-tab-panel label="选项卡1" name="panel1">内容1</v-tab-panel>
        <v-tab-panel label="选项卡2" name="panel2" disabled>内容2</v-tab-panel>
        <v-tab-panel label="选项卡3" name="panel3">内容3</v-tab-panel>
        <v-tab-panel label="选项卡4" name="panel4">内容4</v-tab-panel>
      </v-tabs>
    </div>
    <div class="container">
      <h2>Pager 分页</h2>
      <div class="item">
        <v-button @click="handleAddPage">页码+1</v-button>
      </div>
      <div class="item">
        <v-pager :total="88" :current.sync="currentPage" :page-size="10" @current-change="handleChangePage"></v-pager>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      switchValue1: false,
      switchValue2: true,
      switchValue3: false,
      switchValue4: true,
      checkboxValue1: false,
      checkboxValue2: true,
      checkboxValue3: false,
      checkboxValue4: true,
      inputValue: 'vimi',
      tabValue: 'panel1',
      currentPage: 1
    }
  },
  methods: {
    handleTabClick (value) {
      console.log(value)
    },
    handleSwitch1 (value) {
      console.log(this.switchValue1)
    },
    handleSelectTabs (value) {
      this.tabValue = value
    },
    handleCheckbox (value) {
      console.log(this.checkboxValue2)
    },
    handleChangePage (value) {
      console.log('----1----', value)
      console.log('----2----', this.currentPage)
    },
    handleAddPage () {
      this.currentPage = this.currentPage + 1
    }
  }
}
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  max-width: 800px;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 16px;
}
.container h2 {
  margin: 20px 0;
}
.container .item {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
</style>
