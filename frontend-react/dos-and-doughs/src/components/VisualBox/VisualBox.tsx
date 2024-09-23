function VisualBox(p : any) {
    const visualBoxStyles = {
        width: p.width,
        height: p.height,
        backgroundColor: "var(--graphics-color-lighter)",
        borderRadius: "var(--large-border-radius)",
        position: "absolute" as const,
        zIndex: "-1",
        top: p.top,
        bottom: p.bottom,
        right: p.right,
        left: p.left,
    }

    return (
        <div className="visual-box" style={visualBoxStyles}></div>
    )
}

export default VisualBox