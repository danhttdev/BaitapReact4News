<div>
                <form onSubmit={this.submitSignup}>
                    <legend>Sign up now</legend>
                    <div className="form-group">
                        <label for="">Username</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="username" 
                            placeholder="Input field" 
                            value={this.state.username}
                            onChange={this.onChangeUsername}/> 
                        <label for="">Password</label>
                        <input 
                            className="form-control" 
                            id="password" 
                            placeholder="Input field" 
                            type="password"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        /> 
                        <label for="">Re-password</label>
                        <input 
                            className="form-control" 
                            id="password2" 
                            placeholder="Input field" 
                            type="password"
                            value={this.state.password2}
                            onChange={this.onChangePassword2}
                        /> 
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>