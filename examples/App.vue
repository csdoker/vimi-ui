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
        <v-switch
          v-model="switchValue1"
          active-value="active"
          inactive-value="inactiveValue"
          @change="handleSwitch1"
          style="margin-right: 20px;"
        ></v-switch>
        <v-switch
          v-model="switchValue2"
          active-color="#67C23A"
          inactive-color="#F56C6C"
          style="margin-right: 20px;"
        ></v-switch>
        <v-switch
          v-model="switchValue3"
          disabled
          style="margin-right: 20px;"
        ></v-switch>
        <v-switch v-model="switchValue4" disabled></v-switch>
      </div>
    </div>
    <div class="container">
      <h2>Checkbox 多选框</h2>
      <div class="item">
        <v-checkbox v-model="checkboxValue1"></v-checkbox>
        <v-checkbox v-model="checkboxValue2" @change="handleCheckbox"
          >备选项1</v-checkbox
        >
        <v-checkbox v-model="checkboxValue3" :disabled="true"
          >备选项2</v-checkbox
        >
        <v-checkbox v-model="checkboxValue4" :disabled="true"
          >备选项3</v-checkbox
        >
      </div>
    </div>
    <div class="container">
      <h2>Input 输入框</h2>
      <div class="item">
        <v-input
          v-model="inputValue"
          style="width: 200px; margin-right: 20px;"
        ></v-input>
        <v-input disabled style="width: 200px; margin-right: 20px;"></v-input>
        <v-input
          maxlength="5"
          placeholder="最大输入长度为5个字符"
          style="width: 200px"
        ></v-input>
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
        <v-pager
          :total="88"
          :current.sync="currentPage"
          :page-size="10"
          @current-change="handleChangePage"
        ></v-pager>
      </div>
    </div>
    <div class="container">
      <h2>Carousel 走马灯</h2>
      <v-carousel height="300px" class="demo-carousel">
        <v-carousel-item v-for="item in 4" :key="item">
          <div class="carousel-content">{{ item }}</div>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="container">
      <h2>Collapse 折叠面板</h2>
      <v-collapse v-model="activeNames" @change="handleChange">
        <v-collapse-item title="一致性 Consistency" name="1">
          <div>
            与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
          </div>
          <div>
            在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
          </div>
        </v-collapse-item>
        <v-collapse-item title="反馈 Feedback" name="2">
          <div>
            控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
          </div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </v-collapse-item>
        <v-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>
            清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
          </div>
          <div>
            帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
          </div>
        </v-collapse-item>
        <v-collapse-item title="可控 Controllability" name="4">
          <div>
            用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
          </div>
          <div>
            结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
          </div>
        </v-collapse-item>
      </v-collapse>
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
      currentPage: 1,
      activeNames: ['2']
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
.demo-carousel {
  .v-carousel-item {
    &:nth-child(2n) {
      background-color: #99a9bf;
    }
    &:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
    .carousel-content {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: #fff;
      font-size: 14px;
    }
  }
}
</style>
