export default function({ store, redirect }) {
  // If the user is not authenticated
  var status = store.state.auth.user.status;
  if (status == 'accessUser') {
    return redirect("/auth/student/profile");
  }
  if (status == 'accessProfessor') {
    return redirect("/auth/professor/profile"); 
  }
}
