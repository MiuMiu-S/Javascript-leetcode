/**
 * JavaScript DFS solution
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    var h = grid.length;
    var w = grid[0].length;
    var result = 0;
    function dfs(i, j){
        if(i >= 0 && i < h && j >= 0 && j< w){
            if(grid[i][j] === 1){
                grid[i][j] = 0;
                return 1 + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i + 1, j) + dfs(i, j - 1);
            }
        }    
        return 0;
    }
    for(var x = 0; x < h; x++){
        for(var y = 0; y < w; y++){
            result = Math.max(result, dfs(x, y));
        }
    }
    return result;
};
