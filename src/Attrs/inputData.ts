const inputData = [
    {
      params: 'type',
      desc: '类型',
      type: 'string',
      select: 'text，textarea 和其他原生 input 的 type 值',
      default: 'text',
    },
    {
        params: 'value',
        desc: '绑定值',
        type: 'string / number',
        select: '--',
        default: '--',
      },
      {
        params: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        select: 'true/false',
        default: 'false',
      },
      {
        params: 'readonly',
        desc: '只读',
        type: 'Boolean',
        select: 'true/false',
        default: 'false',
      },
      {
        params: 'placeholder',
        desc: '占位符',
        type: 'string',
        select: '--',
        default: '请选择',
      },
     
      {
        params: 'error',
        desc: '错误禁止input事件',
        type: 'String',
        select: '--',
        default: '--',
      }
  ]
export default inputData ;  

					
