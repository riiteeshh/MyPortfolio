export function* streamText(textArray:Array<string>) {
    while (true) {
        for (const text of textArray) {
        
            for(const t of text){
                yield t
            }
        }
    }
}