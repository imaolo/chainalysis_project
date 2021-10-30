# Matt DiPaolo - Chainalysis Interview Project


## Build Instructions
- dependencies: npm, node, npx
- steps:
1. git clone https://github.com/mad360/chainalysis_project.git
2. cd chainalysis_project
3. cd server
4. npm install
5. npm run start
6. open new ternminal and navigate to the chainalysis_project folder
7. cd client
8. npm install
9. npm run build
10. http://localhost:3001/

## Questionnaire
1. Yes, there a few changes I would have liked to make. First, the user interface could most definitely be improved. As prices are updated, it would helpful for them to be highlighted so that you can see what and when data is retreived. The data is updated regardless, but in its current form it is hard to track when prices change. Also, I would have liked to highlight the buy box green and the sell box red. This is solely for ease of view. My front-end dynamically adapts to the data it receives. It will automatically adjust its table and rows dimensions to fit the structure of the json object. However, it is built only to compare two exchanges for buy and sell oppurtunities. It will still display all the prices, but will not be able to make recommendations on more than two exchanges. This functionality would be out of scope for this project. Nonetheless, I like to write my applications as flexible as possible.
2. Yes, there are plenty of parts of this application that are over-designed. It starts in my server.js file where I define an exchanges array and a markets array. From there, the application is able to conform to the format of these arrays. For example, if we added another currency to the markets array, the back-end program would retrieve this data, send it to the front-end, and the front-end would be able to modify its table row and column dimensions to reflect this change. The same is true for the exchanges array. However, as I previously mentioned, the front-end would only make recomendations on two exchange while still displaying all of them. Finally, to show my modular design skills, I included more React functional components than were necessary.
3. On the front-end, I would need to do further research on React rendering so that I could determine whether my code and build files are as efficient as possible. Doing this would alleviate some web server stress (smaller and less convoluted build files). Though, the main change that would be required is to add and improve the backend hardware. This could include adding more computers and implementaing load balancing or improving a single server to have more memory, cpu power, storage, etc. However, node.js is single threaded so the optimal solution is to add more nodes to the backend infrastructure and load-balance them.
4. The front-end definitely needs work. It does the job and meets requirements but it is not very visually appealing. I would also refactor my code for readability, analyzability, changeability, and flexibility, especially my front end code.
