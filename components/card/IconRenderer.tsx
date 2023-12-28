import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import Image from 'next/image';
import React from 'react'

interface IconRendererProps {
  icon : PageObjectResponse['icon'];

}

export const IconRenderer = ({icon} : IconRendererProps) => {

  if(!icon) return null;

  if(icon.type === "emoji") return <span>{icon.emoji}</span>

  const iconURL = icon.type === "file" ? icon.file.url : icon.external.url
  return (
    <Image src= {iconURL} alt="icon" width={24} height={24} />
  )
}
