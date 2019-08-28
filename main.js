console.log('Event Listeners');

const favoritePies = [
        {
          name: 'Lemon Meringue',
          image: 'https://www.thatskinnychickcanbake.com/wp-content/uploads/2015/07/Lemon-Meringue-Pie-5-1-1-660x440.jpg',
          imageAlt: 'Lemon Meringue',
          instructor: 'Callen'
        },
        {
            name: 'Shepard\'s Pie',
            image: 'https://www.thewholesomedish.com/wp-content/uploads/2019/02/The-Best-Classic-Shepherds-Pie-2.jpg',
            imageAlt: 'Shepard\'s Pie',
            instructor: 'Greg'
          },
          {
            name: 'Not Applicable',
            image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/690b03e1-02ed-458e-b273-3e3e78751aa0/dd09q12-6163fc41-abc3-4166-b72d-3df7b05e281a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY5MGIwM2UxLTAyZWQtNDU4ZS1iMjczLTNlM2U3ODc1MWFhMFwvZGQwOXExMi02MTYzZmM0MS1hYmMzLTQxNjYtYjcyZC0zZGY3YjA1ZTI4MWEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.muqZQkMhkE8iDMpjVMkAjOt4OxJ_TsN63B_C522RPTM',
            imageAlt: 'NO PIE FOR YOU',
            instructor: 'Michael'
          },
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint
  };
  
  const placePies = (piesArr) => {
    let domString = '';
    for(let i = 0; i < piesArr.length; i++) {
        const pie = piesArr[i]
        const domString = `
            <div class="pie-card">
                <h1>${pie.name}</h1>
                <center>
                    <img src="${pie.image}" alt="${pie.imageAlt}">
                </center>
            </div>
            `
            printToDom('pies-oMy', domString);   
    };
  };

placePies(favoritePies);