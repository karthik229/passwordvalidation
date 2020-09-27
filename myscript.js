function validate()
{
  var id=document.getElementById('loginid').value
  var regx=/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/

  if (regx.test(id))
  {
    alert("valid data")
  }
  else
  {
      alert("Invalid")
  }
}
