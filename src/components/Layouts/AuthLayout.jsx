const AuthLayouth = (props) => {
    const {children, title} = props;
    return(
        <div className="flex justify-center bg-white-600 min-h-screen items-center">
        <div className="w-full max-w-xs">
        <h1 className="text-blue-600 text-3xl font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please Enter Your Details
        </p>
        {children}

      </div>
      </div>
    )
}
export default AuthLayouth;