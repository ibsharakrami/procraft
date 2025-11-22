export default function SectionDivider({ className = '' }) {
	return (
		<div
			className={`w-full border-t border-dashed border-gray-300 ${className}`}
			aria-hidden='true'
		></div>
	);
}
