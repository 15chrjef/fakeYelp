import React from 'react';
import Business from './Business';

const BusinessContainer = (props) => {
		const businessList = props.businesses.map((business, i) => <Business key={i} deleteBusiness={() => props.deleteBusiness(i) } data={business}/> )
    return (
      <div className="businessContainer">
				{businessList}
      </div>
    );
}

export default BusinessContainer;
