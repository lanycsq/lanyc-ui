const btnData = [
    {
      params: 'size',
      desc: '尺寸',
      type: 'string',
      select: 'normal / small / mini',
      default: 'normal',
    },
    {
      params: 'theme',
      desc: '按钮类型',
      type: 'string',
      select: 'primary / success / warning / info / danger / text',
      default: 'primary',
    },
    {
      params: 'loading',
      desc: '加载中',
      type: 'boolean',
      select: 'false / true',
      default: 'false',
    }
  ]

  export default btnData;