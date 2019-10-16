$(document).ready( async function() {
  try {
    function index() {
      alert('this is index page')
    }
    function page1() {
      alert('this is page1')
    }
    function page2() {
      alert('this is page2')
    }
    // console.log($('.container').attr('id'))
    if ($('.container').attr('id') === 'index') {
      index()
    }
    else if ($('.container').attr('id') === 'page1') {
      page1()
    }
    else if ($('.container').attr('id') === 'page2') {
      page2()
    }
  }
  catch(err) {
    console.error('ERROR!!: ', err)
  }
  finally{
    console.log('success!')
  }
})