const formatGridPosition = ({x, y}) => {
    return { gridArea: `${y} / ${x} / ${y + 1} / ${x + 1}`}
}

export { formatGridPosition };