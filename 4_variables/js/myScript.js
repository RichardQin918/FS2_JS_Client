$(document).ready( async function() {
  let word_list = ['apple', 'banana', 'coconut']
  let number_list = ['1', '2', '3']

  try {
    for (var i=0; i < word_list.length; i++ ) {
      alert(word_list[i] + ':' +  number_list[i])
    }
    alert('word list:' + word_list  + ',  number list: ' +  number_list)
  }
  catch(err) {
    console.error('ERROR!!: ', err)
  }
  finally{
    console.log('success!')
  }
})