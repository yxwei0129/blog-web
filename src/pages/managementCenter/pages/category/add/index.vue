<template>
  <div class="col-lg-12 p-r-0 title-margin-right">
    <div class="page-header">
      <div class="page-title">
        <i class="el-icon-edit"></i>请添加类别:
        <section id="main-content">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <div class="basic-form">
                    <form>
                      <div class="form-group">
                        <p><lable class="text-muted m-b-15 f-s-12">类别名称</lable><span class="text-danger">*</span> :</p>
                        <el-input v-model="value1"></el-input>
                      </div>
                      <div class="form-group">
                        <p><lable class="text-muted m-b-15 f-s-12">描述</lable><span class="text-danger">*</span> :</p>
                        <el-input v-model="value2"></el-input>
                      </div>
                      <div class="form-group">
                        <p><label class="text-muted m-b-15 f-s-12">创建时间</label><span class="text-danger">*</span> :</p>
                        <el-date-picker
                          v-model="value3"
                          type="date"
                          placeholder="选择日期">
                        </el-date-picker>
                      </div>
                      <div class="form-group">
                        <p class="text-muted m-b-15 f-s-12">是否启用</p>
                        <el-switch
                          v-model="value4"
                          active-color="#13ce66"
                          inactive-color="#ff4949">
                        </el-switch>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <el-button type="primary" style="float: right">保存<i class="el-icon-upload el-icon--right"></i></el-button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      value1: '情感',
      value2: '那些年逝去的青春',
      value3: '',
      value4: true
    }
  }
}
</script>

<style scoped>

</style>
