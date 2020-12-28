export default interface UploadScreenProps {
    onDone: (isCancelled: boolean) => void;
    progress: number;
    visible: boolean;
}
