
const SignIn = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200  px-40 mt-4">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign in now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <input type="email" placeholder="User Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="password" placeholder="Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="password" placeholder="Confirm Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;