import React from "react";
import SearchIcon from '../assets/icons/search.svg';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { SvgIcon } from '@material-ui/core';

export const Search = (props: any): JSX.Element => {

	const [isFocused, setIsFocused] = React.useState(false);
	const [inputValue, setInputValue] = React.useState("");

	const onFocus = () => setIsFocused(true);
	const onBlur = () => setIsFocused(false);
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => (value => {
        setInputValue(value);
        props.onSearchInput(value);
    })(event.target.value);
	const clearInput = () => setInputValue("");
    return (
        <div className={"c-search " + (isFocused ? 'c-search--focused ' : '') + (inputValue ? 'c-search--active ' : '') }>
        	<SvgIcon component={SearchIcon} className="c-search__icon c-search__icon--search" color="primary" viewBox="0 0 600 427" /> 
        	<input type="text" className="c-search__input" name="search" onFocus={onFocus} onBlur={onBlur} onChange={onChange} value={inputValue} placeholder="Search for films" />
        	<CloseRoundedIcon className="c-search__icon c-search__icon--close" onClick={clearInput} />
        	<span className="c-search__highlight c-search__highlight--icon"></span>
        	<span className="c-search__highlight c-search__highlight--input"> {inputValue.replace(/ /g, "\u00a0")} </span>
        </div>
    );
};
