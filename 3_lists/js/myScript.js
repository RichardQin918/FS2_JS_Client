$(document).ready( async function() {
  let msg = 'We have 3 lists: Meat, pops and bubble tea!'
  try {
    alert(msg)
  }
  catch(err) {
    console.error('ERROR!!: ', err)
  }
  finally{
    console.log('success!')
  }
})