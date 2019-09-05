<template>
  <div class="storage">
    <h2>包裹入库</h2>
    <form action="">
        <div id="storageForm">
             <span>运单号：</span><input v-model="formMessege.orderNumber" placeholder="请输入运单号"><br/>
             <span>收件人：</span><input v-model="formMessege.name" placeholder="请输入收件人姓名"><br/>
             <span>电&ensp;&ensp;话：</span><input v-model="formMessege.phone" placeholder="请输入收件人电话"><br/>
             <span>重&ensp;&ensp;量：</span><input v-model="formMessege.weight" placeholder="请输入订单重量"><br/><br/>
        </div>
    </form>
    <div id="">
            <a-button type="primary" @click="makeSure">确定</a-button>
            <a-button type="primary" @click="callBack">返回</a-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
        name: "storage-Form",
        data: function () {
            return {
                formMessege:{
                    orderNumber: "",
                    name:"",
                    phone:"",
                    weight:""
                }   
            }
        },
        methods: {
            makeSure: function () {
                this.$store.dispatch('addPackage',this.formMessege);
                //this.$router.push('/storageList');
            },
             callBack: function () {
                this.$router.push('/storageList');

            }
        }
    }

</script>
