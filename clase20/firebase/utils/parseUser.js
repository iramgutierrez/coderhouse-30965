export default doc => {
  return { id: doc.id, ...doc.data() }
}