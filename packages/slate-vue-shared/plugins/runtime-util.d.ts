import { Editor, Operation, Node, Path, Descendant, NodeEntry, Location } from 'slate';
export declare const getChildren: (node: Node) => any;
export declare const clone: (node: any) => any;
export declare const transform: (editor: Editor, op: Operation, Vue?: any) => void;
export declare const runtimeNode: {
    child(root: Node, index: number): Descendant;
    has(root: Node, path: Path): boolean;
    get(root: Node, path: Path): Node;
    first(root: Node, path: Path): NodeEntry<import("slate").BaseNode>;
    last(root: Node, path: Path): NodeEntry<import("slate").BaseNode>;
    nodes(root: Node, options?: {
        from?: Path | undefined;
        to?: Path | undefined;
        reverse?: boolean | undefined;
        pass?: ((entry: NodeEntry<import("slate").BaseNode>) => boolean) | undefined;
    }): Generator<NodeEntry>;
};
export declare const isVueObject: (obj: any) => any;
export declare const Transforms: {
    delete: (editor: import("slate").BaseEditor, options?: {
        at?: import("slate").BaseRange | Path | import("slate").BasePoint | undefined;
        distance?: number | undefined;
        unit?: "character" | "word" | "line" | "block" | undefined;
        reverse?: boolean | undefined;
        hanging?: boolean | undefined;
        voids?: boolean | undefined;
    } | undefined) => void;
    insertFragment: (editor: import("slate").BaseEditor, fragment: import("slate").BaseNode[], options?: {
        at?: import("slate").BaseRange | Path | import("slate").BasePoint | undefined;
        hanging?: boolean | undefined;
        voids?: boolean | undefined;
    } | undefined) => void;
    insertText: (editor: import("slate").BaseEditor, text: string, options?: {
        at?: import("slate").BaseRange | Path | import("slate").BasePoint | undefined;
        voids?: boolean | undefined;
    } | undefined) => void;
    collapse: (editor: import("slate").BaseEditor, options?: {
        edge?: "anchor" | "focus" | "start" | "end" | undefined;
    } | undefined) => void;
    deselect: (editor: import("slate").BaseEditor) => void;
    move: (editor: import("slate").BaseEditor, options?: {
        distance?: number | undefined;
        unit?: "character" | "word" | "line" | "offset" | undefined;
        reverse?: boolean | undefined;
        edge?: "anchor" | "focus" | "start" | "end" | undefined;
    } | undefined) => void;
    select: (editor: import("slate").BaseEditor, target: Location) => void;
    setPoint: (editor: import("slate").BaseEditor, props: Partial<import("slate").BasePoint>, options?: {
        edge?: "anchor" | "focus" | "start" | "end" | undefined;
    } | undefined) => void;
    setSelection: (editor: import("slate").BaseEditor, props: Partial<import("slate").BaseRange>) => void;
    insertNodes: (editor: import("slate").BaseEditor, nodes: import("slate").BaseText | import("slate").BaseElement | import("slate").BaseEditor | import("slate").BaseNode[], options?: {
        at?: import("slate").BaseRange | Path | import("slate").BasePoint | undefined;
        match?: ((node: import("slate").BaseNode) => boolean) | undefined;
        mode?: "highest" | "lowest" | undefined;
        hanging?: boolean | undefined;
        select?: boolean | undefined;
        voids?: boolean | undefined;
    } | undefined) => void;
    liftNodes: (editor: import("slate").BaseEditor, options?: {
        at?: import("slate").BaseRange | Path | import("slate").BasePoint | undefined;
        match?: ((node: import("slate").BaseNode) => boolean) | undefined;
        mode?: "highest" | "lowest" | "all" | undefined;
        voids?: boolean | undefined;
    } | undefined) => void;
    mergeNodes: (editor: import("slate").BaseEditor, options?: {
        at?: import("slate").BaseRange | Path | import("slate").BasePoint | undefined;
        match?: ((node: import("slate").BaseNode) => boolean) | undefined;
        mode?: "highest" | "lowest" | undefined;
        hanging?: boolean | undefined;
        voids?: boolean | undefined;
    } | undefined) => void;
    moveNodes: (editor: import("slate").BaseEditor, options: {
        at?: import("slate").BaseRange | Path | import("slate").BasePoint | undefined;
        match?: ((node: import("slate").BaseNode) => boolean) | undefined;
        mode?: "highest" | "lowest" | "all" | undefined;
        to: Path;
        voids?: boolean | undefined;
    }) => void;
    removeNodes: (editor: import("slate").BaseEditor, options?: {
        at?: import("slate").BaseRange | Path | import("slate").BasePoint | undefined;
        match?: ((node: import("slate").BaseNode) => boolean) | undefined;
        mode?: "highest" | "lowest" | undefined;
        hanging?: boolean | undefined;
        voids?: boolean | undefined;
    } | undefined) => void;
    setNodes: (editor: import("slate").BaseEditor, props: Partial<import("slate").BaseText> | Partial<import("slate").BaseElement> | Partial<import("slate").BaseEditor>, options?: {
        at?: import("slate").BaseRange | Path | import("slate").BasePoint | undefined;
        match?: ((node: import("slate").BaseNode) => boolean) | undefined;
        mode?: "highest" | "lowest" | "all" | undefined;
        hanging?: boolean | undefined;
        split?: boolean | undefined;
        voids?: boolean | undefined;
    } | undefined) => void;
    splitNodes: (editor: import("slate").BaseEditor, options?: {
        at?: import("slate").BaseRange | Path | import("slate").BasePoint | undefined;
        match?: ((node: import("slate").BaseNode) => boolean) | undefined;
        mode?: "highest" | "lowest" | undefined;
        always?: boolean | undefined;
        height?: number | undefined;
        voids?: boolean | undefined;
    } | undefined) => void;
    unsetNodes: (editor: import("slate").BaseEditor, props: string | string[], options?: {
        at?: import("slate").BaseRange | Path | import("slate").BasePoint | undefined;
        match?: ((node: import("slate").BaseNode) => boolean) | undefined;
        mode?: "highest" | "lowest" | "all" | undefined;
        split?: boolean | undefined;
        voids?: boolean | undefined;
    } | undefined) => void;
    unwrapNodes: (editor: import("slate").BaseEditor, options?: {
        at?: import("slate").BaseRange | Path | import("slate").BasePoint | undefined;
        match?: ((node: import("slate").BaseNode) => boolean) | undefined;
        mode?: "highest" | "lowest" | "all" | undefined;
        split?: boolean | undefined;
        voids?: boolean | undefined;
    } | undefined) => void;
    wrapNodes: (editor: import("slate").BaseEditor, element: import("slate").BaseElement, options?: {
        at?: import("slate").BaseRange | Path | import("slate").BasePoint | undefined;
        match?: ((node: import("slate").BaseNode) => boolean) | undefined;
        mode?: "highest" | "lowest" | "all" | undefined;
        split?: boolean | undefined;
        voids?: boolean | undefined;
    } | undefined) => void;
    transform: (editor: import("slate").BaseEditor, op: Operation) => void;
};
