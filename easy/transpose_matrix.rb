def transpose(matrix)
    height = matrix.length
    width = matrix[0].length
    result = Array.new(width) {Array.new(height)}
    i = 0
    while i < height
        j = 0
        while j < width
            result[j][i] = matrix[i][j]
            j += 1
        end
        i += 1
    end
    return result
end