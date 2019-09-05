   <template>
   <div>
       <div>
        <span>菜鸟驿站</span>
        <button @click="queryAll">ALL</button>
        <button @click="queryBooked">已预约</button>
        <button @click="queryReceived">已取件</button>
        <button @click="queryUnbooked">未预约</button> 
        <a-button type="primary" @click="toStoragePage">添加</a-button>
    </div>  
  <a-table :columns="columns" :dataSource="currentFilter" bordered>
    <template slot="name" slot-scope="text">
      <a href="javascript:;">{{text}}</a>
    </template>
  </a-table>
  </div>
</template>
<script>
import axios from "axios";
  const columns = [{
    title: '运单号',
    dataIndex: 'orderNumber',
    scopedSlots: { customRender: 'orderNumber' },
  }, {
    title: '收件人',
    className: 'name',
    dataIndex: 'name',
  }, {
    title: '电话',
    dataIndex: 'phone',
  },
  {
    title: '状态',
    dataIndex: 'state',
  },
  {
    title: '预约时间',
    dataIndex: 'timeOfAppointment',
  },
  {
    title: '确认收货',
    dataIndex: '',
  }];

export default {
    name: "storage-List",
    data() {
      return {
        storageData:"",
        columns,
      }
    },
    computed: {
            currentFilter: function () {
                return this.$store.state.storageListData;
            }
        },
    created:function(){
        this.$store.dispatch('queryStorageList');
    },
    methods:{
      toStoragePage:function(){
        //console.log(111111);
        this.$router.push('/storageofparcels');
      },
      queryAll:function(){
        
      },
      queryBooked:function(){
        
      },
      queryReceived:function(){
        
      },
      queryUnbooked:function(){
        
      }
    }
}
</script>
<style>
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>