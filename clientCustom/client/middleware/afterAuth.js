export default function ({ store, redirect}) {
    // If the user is not authenticated
    if (store.state.auth.user) {    
    //  return error({errorCode:503, message:'You are not allowed to see this'}),
    alert('in login');
    return redirect('/')
    }
  }
  