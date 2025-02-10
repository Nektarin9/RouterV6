import React, { ChangeEvent, FocusEvent, ReactNode } from 'react';
import { borderRadiusStyle, sizeStyle } from './constants.tsx';
import style from './textInput.module.css';

type sizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type variantType = 'default' | 'filled' | 'unstyled';
interface TextInputProps {
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
	value?: string;
	leftSection?: ReactNode;
	size?: sizeType;
	radius?: sizeType;
	type?: 'text' | 'password' | 'email';
	placeholder?: string;
	label?: string;
	inputWithAsterisk?: boolean;
	description?: string;
	disabled?: boolean;
	error?: string | null;
	variant?: variantType;
}

export const TextInput = ({
	onChange,
	onFocus,
	value,
	size = 'md',
	radius = 'md',
	type = 'text',
	variant = 'default',
	placeholder,
	inputWithAsterisk,
	description,
	disabled,
	label = 'name',
	error = '',
	leftSection,
}: TextInputProps) => {
	return (
		<div className={style.container}>
			<div className={style.label} style={sizeStyle[size].label}>
				{label}
				{inputWithAsterisk && (
					<span
						className={style.inputWithAsterisk}
						style={sizeStyle[size].inputWithAsterisk}
					>
						*
					</span>
				)}
				{description && (
					<span
						className={style.description}
						style={sizeStyle[size].description}
					>
						{description}
					</span>
				)}
			</div>
			<div className={style.inputWrapper}>
				{leftSection && <span className={style.leftSection}>{leftSection}</span>}
				<input
					value={value}
					placeholder={placeholder}
					type={type}
					disabled={disabled}
					onChange={onChange}
					onFocus={onFocus}
					className={`${style[variant]} ${error && style.inputError}`}
					style={{
						...sizeStyle[size].input,
						...borderRadiusStyle[radius],
					}}
				/>
			</div>
			{error && (
				<span className={style.error} style={sizeStyle[size].description}>
					{error}
				</span>
			)}
		</div>
	);
};
