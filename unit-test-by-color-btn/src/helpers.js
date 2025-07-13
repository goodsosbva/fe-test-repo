export function kebabCasteToTitleCase(color) {
    const colorWidthSpaces = color.replaceAll("-", " ");
    const colorWidthCaps = colorWidthSpaces.replace(/\b([a-z])/g, (match) => match.toUpperCase())

    return colorWidthCaps;
}
