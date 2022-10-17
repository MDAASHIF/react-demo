export default function BrandAdd(){
    return (
        <>
        <div className="app-wrapper" style={{marginTop : "3%"}}>
	    
	    <div className="app-content pt-3 p-md-3 p-lg-4">
		    <div className="container-xl">			    
			    <h1 className="app-page-title">Settings</h1>
			    <hr className="mb-4" />
                <div className="row g-4 settings-section">
	               
	                <div className="col-12 col-md-12">
		                <div className="app-card app-card-settings shadow-sm p-4">
						    
						    <div className="app-card-body">
							    <form className="settings-form">
								    <div className="mb-3">
									    <label htmlFor="setting-input-1" className="form-label">Business Name<span className="ms-2" data-container="body" data-bs-toggle="popover" data-trigger="hover" data-placement="top" data-content="This is a Bootstrap popover example. You can use popover to provide extra info."><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-info-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/>
  <circle cx="8" cy="4.5" r="1"/>
</svg></span></label>
									    <input type="text" className="form-control" id="setting-input-1"  />
									</div>
									<div className="mb-3">
									    <label htmlFor="setting-input-2" className="form-label">Contact Name</label>
									    <input type="text" className="form-control" id="setting-input-2"  />
									</div>
								    <div className="mb-3">
									    <label htmlFor="setting-input-3" className="form-label">Business Email Address</label>
									    <input type="email" className="form-control" id="setting-input-3"  />
									</div>
									<button type="submit" className="btn app-btn-primary" >Save Changes</button>
							    </form>
						    </div>
						    
						</div>
	                </div>
                </div>
                
		    </div>
	    </div>
	    
	    <footer className="app-footer">
		    <div className="container text-center py-3">
		        
            <small className="copyright">Designed with <span className="sr-only">love</span><i className="fas fa-heart" style={{color: "#fb866a"}}></i> by <a className="app-link" href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
		       
		    </div>
	    </footer>
	    
    </div>
        </>
    );
}