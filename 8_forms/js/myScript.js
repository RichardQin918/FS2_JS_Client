$(document).ready( async function() {
  try {
    function index() {
      alert('Hello!')
    }


    $('.morning').on('click', function() {
      window.location.replace('morning.html')
    })

    $('.evening').on('click', function() {
      window.location.replace('evening.html')
    })

    $('.back').on('click', function() {
      window.location.replace('index.html')
    })

    $('.submit').on('click', function() {
      alert('submitted!!')
    })


    if ($('.container').attr('id') === 'index') {
      index()
    }
    else if ($('.container').attr('id') === 'morning') {
      alert('Good Morning')
    }
    else if ($('.container').attr('id') === 'evening') {
      alert('Good Evening')
    }
  }
  catch(err) {
    console.error('ERROR!!: ', err)
  }
  finally{
    console.log('success!')
  }
})