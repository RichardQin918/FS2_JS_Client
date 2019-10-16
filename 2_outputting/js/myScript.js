$(document).ready( async function() {
  let msg = 'Bonjour'
  try {
    alert(msg)
  }
  catch(err) {
    console.error('ERROR!!: ', err)
  }
  finally{
    console.log('ok')
  }
})