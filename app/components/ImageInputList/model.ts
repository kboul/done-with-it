export default interface ImageInputList {
    imageUris: string[];
    onImageAdd: (imageUri: string) => void;
    onImageRemove: (imageUri: string) => void;
}
