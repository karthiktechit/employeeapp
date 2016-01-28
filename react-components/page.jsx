var React = require ('react');

var EmployeeSearch = require('./employee-search.jsx');
var Page = React.createClass({

	render: function(){
		return(
			<div>
				<div className='page-header'> 
					<h1>Employee Details</h1> 
				</div>
				<EmployeeSearch/>
			</div>
			);
	}
});
module.exports = Page;