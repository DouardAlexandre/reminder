var config = {
   entry: './main.js',
	
   output: {
      path:'/',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				// test:/\.css$,/, loader: "style-loader!css-loader",
            query: {
               presets: ['es2017', 'react']
            }
         }
      ]
   }
}
// module.exports = {
//    module: {
//       loaders: [
//       { test:/\.css$,/, loader: "style-loader!css-loader"},
//       ]
//    }
// };
module.exports = config;