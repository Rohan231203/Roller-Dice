import toast from 'react-hot-toast';


export default function Login() {
    const hello=() => {
        console.log('Bruhhh');
        toast('Here is your toast.')
    }
  return (
    
    <div>
      <button onClick={hello}>Login</button>
    </div>
  )
}
