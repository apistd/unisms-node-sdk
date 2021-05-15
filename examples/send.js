const UniSMS = require('../lib').default // require('unisms')

const client = new UniSMS({
  accessKeyId: 'your access key id',
  accessKeySecret: 'your access key secret',
})

// send text message to single recipient (by template)
client.send({
  to: 'your phone number',
  signature: 'UniSMS',
  templateId: 'login_tmpl',
  templateData: {
    code: 8888,
  },
})
  .then(ret => {
    console.info('Result:', ret)
  })
  .catch(e => {
    console.error(e)
  })
