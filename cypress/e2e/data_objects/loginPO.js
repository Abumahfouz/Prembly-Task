
export const checkAPI = () => {

  //Make a request to the search api extension of the Base URL stored in the environment variables
      cy.request({
        method: 'GET',
        url: '/search',
      }).then((response)=>{
        //Validate response is successful
        expect(response.status).to.eq(200)
        expect(response.duration).to.not.be.greaterThan(6000)
        const responseData = response.body;
        //Verify that response object contains the desired property
        const commonPropertyObjects = responseData.filter(obj => obj.hasOwnProperty('country'));

        cy.log(commonPropertyObjects);
        cy.wrap(commonPropertyObjects).each(($data,$index)=>{
            if($data.country === 'Nigeria'){
                cy.log(commonPropertyObjects[$index])
            }
        })

      })

}
