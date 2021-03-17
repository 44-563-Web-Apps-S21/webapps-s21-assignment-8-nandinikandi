const http = require('http')    //Pull in a useful node package
//Try http.
const hostname = '127.0.0.1'    //Local host
const port = 3001               //Not assigned

const building = ['Single family house', 'Condos', 'Town homes', 'Apartments', 'Office buildings', 'Libraries'];
      for (var i = 0; i < building.length; i++) {
        console.log(building[i]);
      }

const server =
  http.createServer(            //Creates the response loop
    (req, res) => {               //Anonymous function to handle the request

      min = Math.ceil(0);
      max = Math.floor(5);
      const rand = Math.floor(Math.random() * (max - min + 1) + min);

      console.log('rand -> '+ rand);
      console.log('rand of building -> '+ building[rand]);


      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> BONUS </title> </head>')
      res.write('<body>')
      res.write('<h1>')
      res.write('Buildings')
      res.write('</h1>\n')
      res.write(`<b>random value from Buildings -> ${building[rand]}</b>`)
      res.end('</body></html>')  //Close the response and provide content
    }                           //No return needed, we modified the res object we got
  )

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})