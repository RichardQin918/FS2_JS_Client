$(document).ready( async function() {
  try {
    let word_list = ['apple', 'b', 'coconut']
    let number_list = [1, 22, 33]
    let number = 0
    let word = ''
    for ( var item in word_list) {
      if (word_list[item].length === 1 ) {
        word = word_list[item]
      }
    }

    for ( var item in word_list) {
      if (number_list[item] < 10 ) {
        number = item
      }
    }

    $('#number').text(number)
    $('#word').text(word)
    alert('word: ' + word  + ',  number: ' +  number)
  }
  catch(err) {
    console.error('ERROR!!: ', err)
  }
  finally{
    console.log('success!')
  }
})