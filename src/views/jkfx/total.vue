<style scoped>
.total {
  width: 100%;
}

.total td {
  border    : 1px solid #ddd;
  padding   : 6px;
  font-size : 14px;
  text-align: center;
  width     : 12.5%;
  min-height: 20px;
}

.info {
  color: #999;
}
</style>

<template>
  <div>
    <Row>
      <Col span="12">
      <Button-group>
        <Button>
          <Icon type="ios-download"></Icon>
          下载
        </Button>
        <Button>
          <Icon type="printer"></Icon>
          打印
        </Button>
      </Button-group>
      </Col>
      <Col span="12">
      <Form ref="formInline" class="text-right">
        <Form-item prop="dateLimit" label="选择要查看报表的时间范围">
          <Date-picker type="daterange" :value="dateLimit" :options="dateLimitOptions" placement="bottom-end" placeholder="选择要查看报表的时间范围" :clearable="false" :editable="false" style="width: 200px"></Date-picker>
        </Form-item>
      </Form>
      </Col>
    </Row>
    <table class="total">
      <tbody>
        <tr>
          <td>段发信息</td>
          <td></td>
          <td>车间信息</td>
          <td></td>
          <td>车间监控</td>
          <td></td>
          <td>车间视频</td>
          <td></td>
        </tr>
        <tr>
          <td>电力分析员</td>
          <td></td>
          <td>内燃分析员</td>
          <td></td>
          <td>分析趟数</td>
          <td></td>
          <td>有效考核信息</td>
          <td></td>
        </tr>
        <tr>
          <td>自停</td>
          <td></td>
          <td>常用</td>
          <td></td>
          <td>卸载</td>
          <td></td>
          <td>防溜</td>
          <td></td>
        </tr>
        <tr>
          <td>抢下非常</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>调车大解锁</td>
          <td></td>
          <td>调车小解锁</td>
          <td></td>
          <td>打虎坑解锁</td>
          <td></td>
          <td>引导</td>
          <td></td>
        </tr>
        <tr>
          <td>计划路票</td>
          <td></td>
          <td>临时路票</td>
          <td></td>
          <td>无码</td>
          <td></td>
          <td>特殊前行</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
const today = new Date();

export default {
  data() {
    return {
      dateLimit       : [today, today],
      /** 时间范围选项 */
      dateLimitOptions: {
        disabledDate(date) {
          return date && date.valueOf() > Date.now(); // 不能选择今日之后的日期
        },
        shortcuts: [
          {
            text: '最近一周',
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              return [start, end];
            }
          },
          {
            text: '最近一个月',
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              return [start, end];
            }
          },
          {
            text: '最近三个月',
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              return [start, end];
            }
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('提交成功!');
        } else {
          this.$Message.error('表单验证失败!');
        }
      })
    }
  }
}
</script>
