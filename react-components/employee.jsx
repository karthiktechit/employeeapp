var React = require ('react');

var Employee = React.createClass({

	render: function(){
		var employeeDetails ="";
		if(this.props.employees !=null && this.props.employees.length > 0){
			employeeDetails = this.props.employees.map(function(val){
				return(
					<div className="employee">
						<p>{val.title} {val.firstName} {val.surname}</p>
						<p>Annual Take Home : {val.takeHome}</p>
						<p>Annual Income Tax : {val.incomeTax}</p>
						<p>National Insurance paid: {val.nationalInsurance}</p>
					</div>
				);
			});	
		} 
		
		
		return(
			<div onClick={this.handleClick} className='employee-detail'>
				{employeeDetails}
			</div>
			);
	}
});
module.exports = Employee;