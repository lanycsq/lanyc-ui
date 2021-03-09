const dialogData = [
    {
      params: 'visible',
      desc: '是否展示',
      type: 'boolean',
      select: 'true / false',
      default: 'normal',
    },
    {
      params: 'ok',
      desc: '确认触发函数',
      type: 'function',
      select: '()=>{}',
      default: '--',
    },
    {
      params: 'cancel',
      desc: '取消触发函数',
      type: 'function',
      select: '()=>{}',
      default: '--',
    },
  ]

  export default dialogData;